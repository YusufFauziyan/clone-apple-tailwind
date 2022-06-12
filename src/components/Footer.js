import React from 'react'

export default function Footer() {
    return(
        <div className="mx-auto p-4 bg-[#F5F5F7] text-xs text-slate-500 md:text-sm md:px-6 xl:px-20 2xl:px-60">
            <p>*Rp 69.000/bulan setelah percobaan gratis. Satu paket langganan untuk tiap grup Keluarga Berbagi. Penawaran berlaku selama 3 bulan setelah aktivasi perangkat yang memenuhi syarat. Paket diperbarui otomatis, kecuali dibatalkan. Pembatasan dan syarat lainnya berlaku.</p>
            <p className='mt-4'>Rp 69.000/bulan setelah percobaan gratis. Hanya satu penawaran per ID Apple dan hanya satu penawaran per keluarga jika Anda tergabung dalam grup Keluarga Berbagi, terlepas dari jumlah perangkat yang dibeli oleh Anda atau keluarga Anda. Penaw\id\iphone-13-pro\aran ini tidak tersedia jika Anda atau Keluarga Anda sudah pernah menerima penawaran Apple TV+ selama satu tahun gratis. Penawaran berlaku selama 3 bulan setelah aktivasi perangkat yang memenuhi syarat. Paket diperbarui otomatis, kecuali dibatalkan. Pembatasan dan syarat lainnya berlaku.</p>
            <hr className='w-full border-x-2 my-4 mx-auto'/>
            <div className="flex border-b-2 pb-2 justify-between hover:text-slate-800">
                <a href="#">Belanja dan Belajar</a>
                <i class='bx bx-plus'></i>
            </div>
            <div className="flex border-b-2 py-2 justify-between hover:text-slate-800">
                <a href="#">layanan</a>
                <i class='bx bx-plus'></i>
            </div>
            <div className="flex border-b-2 py-2 justify-between hover:text-slate-800">
                <a href="#">Akun</a>
                <i class='bx bx-plus'></i>
            </div>
            <div className="flex border-b-2 py-2 justify-between hover:text-slate-800">
                <a href="#">Untuk Bisnis</a>
                <i class='bx bx-plus'></i>
            </div>
            <div className="flex border-b-2 py-2 justify-between hover:text-slate-800">
                <a href="#">Untuk Pendidikan</a>
                <i class='bx bx-plus'></i>
            </div>
            <div className="flex border-b-2 py-2 justify-between hover:text-slate-800">
                <a href="#">Nila-nilai Apple</a>
                <i class='bx bx-plus'></i>
            </div>
            <div className="my-4">
                <a href="#" className='text-sky-500 hover:underline'>Temukan retailer </a>
                <p className='inline-block'>di dekat Anda.</p>
            </div>
            <a href='' className='hover:underline font-semibold mb-4 block'>Indonesia</a>
            <p>Hak cipta <i class='bx bx-map'></i> 2022 Apple Inc. Seluruh hak cipta dilindungi undang-undang.</p>
            <div className='flex mt-2 font-semibold mb-4'>
                <a href="#" className='hover:underline pr-2 border-r-2'>Kebijakan Privasi</a>
                <a href="#" className='hover:underline px-2 border-r-2'>Ketentuan penggunaan</a>
                <a href="#" className='hover:underline px-2 border-r-2'>Legal</a>
                <a href="#" className=' hover:underline pl-2'>Peta Situs</a>
            </div>
        </div>
    )
}