import { useState } from "react";
import InputField from "./components/InputField";
import SelectField from "./components/SelectField";
import ResultCard from "./components/ResultCard";

export default function HitungDendaForm() {

  const [nama, setNama] = useState("");
  setNama("User");
  const [nim, setNim] = useState("");
  const [hari, setHari] = useState("");
  const [judul, setJudul] = useState("");
  const [status, setStatus] = useState("");

  const namaValid = nama && !/\d/.test(nama) && nama.length >= 3;
  const nimValid = nim && !isNaN(nim) && nim.length >= 3;
  const hariValid = hari && !isNaN(hari) && hari > 0;
  const denda = hari > 15 ? (hari - 15) * 500 : 0;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-purple-200 p-6">

      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl grid grid-cols-2 overflow-hidden">

        {/* FORM */}
        <div className="p-6">
          <h2 className="text-xl font-bold mb-5">Input Data</h2>  

          <div className="space-y-3">

            <InputField
              placeholder="Nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              error={!namaValid && nama && "Nama minimal 3 huruf & tidak boleh angka"}
            />

            <InputField
              placeholder="NIM"
              value={nim}
              onChange={(e) => setNim(e.target.value)}
              error={!nimValid && nim && "NIM harus angka"}
            />

            <InputField
              placeholder="Jumlah Hari"
              value={hari}
              onChange={(e) => setHari(Number(e.target.value))}
              error={!hariValid && hari && "Harus angka > 0"}
            />

            <SelectField
              placeholder="Pilih Judul Buku"
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
              options={[
                "Algoritma Dasar",
                "Basis Data Dasar",
                "Pemrograman Web"
              ]}
            />

            <SelectField
              placeholder="Status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              options={["Member", "Non-member"]}
            />

          </div>
        </div>

        <div className="p-6 bg-gradient-to-br from-blue-500 to-purple-500 text-white flex flex-col justify-center">
          <h2 className="text-xl font-bold mb-5">Hasil</h2>
          {!nama || !nim || !hari || !judul ? (
            <p>Isi data terlebih dahulu!</p>
          ) : (
            <ResultCard
              nama={nama}
              nim={nim}
              hari={hari}
              judul={judul}
              denda={denda}
            />
          )}
        </div>

      </div>
    </div>
  );
}
