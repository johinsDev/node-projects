const badfunction = () => 5 + z;
try {
  badfunction();
} catch (error) {
  console.log("bad function ha fallado");
  console.error(error.message);
}
console.log("continuamos...");
