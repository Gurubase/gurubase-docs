branch_name=$1

if [ -z "$branch_name" ]; then
    echo "Usage: $0 <branch_name>"
    exit 1
fi

git fetch origin $branch_name
git checkout -b temp_$branch_name origin/$branch_name
git checkout master
git merge --squash temp_$branch_name
git commit -m "Merge $branch_name into master"
git push origin master
git branch -D temp_$branch_name
