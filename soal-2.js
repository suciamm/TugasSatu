const hewanBuas = ["Harimau", "Singa", "Beruang", "Serigala"];
const hewanJinak = ["Kucing", "Kelinci", "Ayam"];

const penggabungan = () => [...hewanBuas, ...hewanJinak];

const makananKesukaan = () =>{
    let kerupuk, wortel, biji;
    //let kucing, kelinci, ayam;
    [kerupuk, wortel, biji] = hewanJinak;
    console.log("kerupuk = " + kerupuk);
    console.log("wortel = " + wortel);
    console.log("biji-bijian = " + biji);
}

makananKesukaan();
const tampil = new Promise(() => {
    setTimeout(penggabungan, 5000);
});
  