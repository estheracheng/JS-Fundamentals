function add(a, b) {
  console.log(a + b);
}

const a = Number.parseInt(process.argv[2]);
const b = Number.parseInt(process.argv[3]);

add(a, b);
