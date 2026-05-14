export default function ResultCard({
  nama,
  nim,
  hari,
  judul,
  denda
}) {
  return (
    <div className="space-y-2">
      <p><b>Nama:</b> {nama}</p>
      <p><b>NIM:</b> {nim}</p>
      <p><b>Buku:</b> {judul}</p>
      <p><b>Hari:</b> {hari}</p>

      <div className="mt-4 p-3 bg-white/20 rounded-lg">
        <p className="text-lg font-bold">Total Denda Rp.{denda}</p>
      </div>
    </div>
  );
}
