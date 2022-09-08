import fx from "fireworks";

const FireWorks = () => {
  let range = (n) => [...new Array(n)];
  return range(6).map(() =>
    fx({
      x: Math.random(window.innerWidth / 2) + window.innerWidth / 4,
      y: Math.random(window.innerWidth / 2) + window.innerWidth / 4,
      colors: ["#cc3333", "#4CAF50", "#81C784"],
    })
  );
};
export default FireWorks;
