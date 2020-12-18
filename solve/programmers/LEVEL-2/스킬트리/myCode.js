function solution(skill, skill_trees) {
  let answer = 0;
  for (let i = 0; i < skill_trees.length; i++) {
    let check = skill.split('');
    let flag = true;
    for (let j = 0; j < skill_trees[i].length; j++) {
      let cur = skill_trees[i][j];
      if (!check.includes(cur)) continue;
      else {
        if (check[0] === cur) {
          check.shift();
        } else {
          flag = false;
          break;
        }
      }
    }
    if (flag) answer += 1;
  }
  return answer;
}
