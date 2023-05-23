// Objek nama, nim, dan email
const biodata = {
    nama: 'Suci amanah',
    nim: '02042111028',
    email: 'suciamnh01@gmail,com'
  };
  
  // Destructuring objek
  const { nama, nim, email } = biodata;
  
  // Menampilkan nama, nim, dan email
  console.log(`Nama: ${nama}`);
  console.log(`NIM: ${nim}`);
  console.log(`Email: ${email}`);

  // Variabel array teman-teman
const array1 = ['Maulina', 'Putri'];
const array2 = ['Kharisma', 'Maypa'];
const array3 = ['Aliya', 'Wulan'];

// Menggabungkan menggunakan spread operator
const gabungan = [...array1, ...array2, ...array3];

// Mencetak gabungan array
console.log(gabungan);

  