function solution(info, query) {
  const answer = [];
  const people = [];
  info.forEach(ele => {
    const [language, job, career, food, score] = ele.split(' ');
    people.push({ language, job, career, food, score });
  });
  console.log(people);
  query.forEach((ele, idx) => {
    const eachQuery = ele.split(' ').filter(ele => {
      if (ele === 'and') return false;
      else return true;
    });
    console.log(eachQuery);
    people.forEach(person => {
      const { language, job, career, food, score } = person;
      const [ql, qj, qc, qf, qs] = eachQuery;
      if (qs === '-') {
        answer[idx] = people.length;
        return;
      }

      if (ql !== '-' && ql !== language) return;
      if (qj !== '-' && qj !== job) return;
      if (qc !== '-' && qc !== career) return;
      if (qf !== '-' && qf !== food) return;
      if (Number(qs) > Number(score)) return;

      if (answer[idx]) answer[idx] += 1;
      else answer[idx] = 1;
    });
    if (!answer[idx]) answer[idx] = 0;
  });
  return answer;
}

const info = [
  'java backend junior pizza 150',
  'python frontend senior chicken 210',
  'python frontend senior chicken 150',
  'cpp backend senior pizza 260',
  'java backend junior chicken 80',
  'python backend senior chicken 50',
];
const query = [
  'java and backend and junior and pizza 100',
  'python and frontend and senior and chicken 200',
  'cpp and - and senior and pizza 250',
  '- and backend and senior and - 150',
  '- and - and - and chicken 100',
  '- and - and - and - 150',
];

console.log(solution(info, query));
