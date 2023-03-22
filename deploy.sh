#!/bin/bash
set -E
# ENV
# Create array - requires bash 4
ENV_LIST=("staging" "prod")
PS3='Choose environment: '
select ENV in "${ENV_LIST[@]}"
do
    break
done
echo "";
echo "You have chosen: $ENV"
if [ ${ENV} == "staging" ]
then
    URL="567927533262.dkr.ecr.eu-central-1.amazonaws.com/payload-cms-image"
    CONFIG_ENV="staging"
    PASSWORD_STDIN="567927533262.dkr.ecr.eu-central-1.amazonaws.com"
fi
if [ ${ENV} == "prod" ]
then
    # todo
    URL="567927533262.dkr.ecr.eu-central-1.amazonaws.com/payload-cms-image"
    CONFIG_ENV="prod"
    PASSWORD_STDIN="567927533262.dkr.ecr.eu-central-1.amazonaws.com"
fi
LATEST_TAG=$(git tag -l --sort=-creatordate | head -n 1)
[ ! -z ${LATEST_TAG} ] || LATEST_TAG='latest'
COMMITS_SINCE_LAST_TAG=$(git rev-list ${LATEST_TAG}.. --count)
INSTRUCTION_1='  New images will include these changes!'
INSTRUCTION_2='  Do not build and push images to only deploy template changes.'
if [ ${COMMITS_SINCE_LAST_TAG} != 0 ]
then
    printf "\n  \033[0;31m${COMMITS_SINCE_LAST_TAG} commit(s) since tag %s!\n%s\n%s\033[m\n" "${LATEST_TAG}" "${INSTRUCTION_1}" "${INSTRUCTION_2}"
fi
GIT_STATUS=$(git status --porcelain)
if [ "${GIT_STATUS}" != '' ]
then
    printf "\n  \033[0;31mThere are uncommitted changes!\n%s\n%s\033[m\n" "${INSTRUCTION_1}" "${INSTRUCTION_2}"
fi
printf "\nEnter ECR image tag (default '\033[0;31m${LATEST_TAG}\033[m' from ${COMMITS_SINCE_LAST_TAG} commit(s) ago): "
read -r TAG
[ ! -z ${TAG} ] || TAG=${LATEST_TAG}
IMAGE="${URL}:${TAG}"

# Profile
while IFS= read -r line; do
    PROFILE_LIST+=("$line")
done <<< "$(aws configure list-profiles)"
unset IFS

for PROFILE in "${PROFILE_LIST[@]}"
do
    PROFILE="$(echo $PROFILE | sed 's~[^[:alnum:]_]\+~~g')"
    printf '.'
    if [[ "$PROFILE" == *"_temp"* ]] || [[ "$PROFILE" == "staging"* ]]; then
        CLEANED_PROFILE_LIST+=( "${PROFILE}" )
    fi
done
IFS=$'\n' CLEANED_PROFILE_LIST=($(sort <<< "${CLEANED_PROFILE_LIST[*]}"))
unset IFS

echo '';
echo '';
PS3='Choose profile: '
select PROFILE in "${CLEANED_PROFILE_LIST[@]}"
do
    export PROFILE
    break
done
echo "";
echo "You have chosen: $PROFILE"
printf "\nDo you want to push? [Y|n] "
read -r PUSH
[ ! -z ${PUSH} ] || PUSH='Y'
echo ""
echo "      ------      "
echo "Env:                | ${ENV}"
echo "Tag:                | ${TAG}"
echo "Profile:            | ${PROFILE}"
echo "Deploy:             | ${PUSH}"
echo "      ------      "
printf "\nProceed? [Y|n] "
read -r PROCEED
[ ! -z ${PROCEED} ] || PROCEED='Y'
[[ ${PROCEED} != 'Y' && ${PROCEED} != 'y' ]] && exit
if ! docker info > /dev/null 2>&1; then
  echo "This script uses docker, and it isn't running - please start docker and try again!"
  exit 1
fi
echo "Logging in..."
aws ecr --profile ${PROFILE} --region eu-central-1 get-login-password | \
docker login --username AWS --password-stdin "${PASSWORD_STDIN}"
echo ""
echo "Building:"
echo ${IMAGE}
echo ""
DOCKER_BUILDKIT=1 docker build --platform="linux/amd64" -t ${IMAGE} -f ./Dockerfile .
docker push ${IMAGE}
docker image rm ${IMAGE}
