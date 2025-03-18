'use client';

import { FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import Link from 'next/link'; // Import Link dari next/link

const Footer = () => {
  return (
    <footer className="bg-[#071952] text-white py-15">
      <div className="max-w-6xl mx-auto px-8 md:px-2">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div>
            <h2 className="text-4xl font-bold">UrbanCare</h2>
          </div>

          <div className="ml-14">
            <ul className="text-sm">
              <li className="mb-1">
                <Link href="/" className="hover:text-gray-500">Beranda</Link>
              </li>
              <li className="mb-1">
                <Link href="/Penglolaan-Sampah" className="hover:text-gray-500">Penglolaan Sampah</Link>
              </li>
              <li className="mb-1">
                <Link href="/Laporan" className="hover:text-gray-500">Laporan</Link>
              </li>
              <li className="mb-1">
                <Link href="/shop" className="hover:text-gray-500">Shop</Link>
              </li>
              <li className="mb-1">
                <Link href="/Edukasi" className="hover:text-gray-500">Edukasi</Link>
              </li>
            </ul>
          </div>

          <div className="ml-4">
            <ul className="text-sm">
              <li className="mb-1">
                <Link href="/Jadwal-Penjemputan-Sampah" className="hover:text-gray-500">Jadwal Penjemputan Sampah</Link>
              </li>
              <li className="mb-1">
                <Link href="/Layanan-Pengelolaan-Sampah-Tambahan" className="hover:text-gray-500">Layanan Pengelolaan Sampah Tambahan</Link>
              </li>
              <li className="mb-1">
                <Link href="/Daur-Ulang-Sampah" className="hover:text-gray-500">Daur Ulang Sampah</Link>
              </li>
              <li className="mb-1">
                <Link href="/Lokasi-TPA-Kota-Malang" className="hover:text-gray-500">Lokasi TPA Kota Malang</Link>
              </li>
              <li className="mb-1">
                <Link href="/Artikel" className="hover:text-gray-500">Artikel</Link>
              </li>
            </ul>
          </div>

          <div className="ml-4">
            <ul className="text-sm">
              <li className="mb-1">
                <Link href="/Kampanye" className="hover:text-gray-500">Kampanye</Link>
              </li>
              <li className="mb-1">
                <Link href="/Jual-Barang-bekas" className="hover:text-gray-500">Jual Barang bekas</Link>
              </li>
              <li className="mb-1">
                <Link href="/Beli-Barang-bekas" className="hover:text-gray-500">Beli Barang bekas</Link>
              </li>
              <li className="mb-1">
                <Link href="/Program-Penglolaam-Sampah" className="hover:text-gray-500">Program Penglolaam Sampah</Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="text-sm">
              <li className="mb-2 flex items-center">
                <FaInstagram className="ml-4 mr-3" />
                <a href="https://instagram.com/urbancare123" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
                  @urbancare
                </a>
              </li>

              <li className="mb-2 flex items-center">
                <SiGmail className="ml-4 mr-3" />
                <a href="mailto:info@urbancare.com" className="hover:text-gray-500">
                  info@urbancare.com
                </a>
              </li>

              <li className="mb-2 flex items-center">
                <FaWhatsapp className="ml-4 mr-3" />
                <a href="https://wa.me/621234567890" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
                  +62 123 4567 890
                </a>
              </li>

              <li className="mb-2 flex items-center">
                <FaLinkedin className="ml-4 mr-3" />
                <a href="https://linkedin.com/company/urbancare123" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
                  UrbanCare
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
          <div>
            <h3 className="text-sm font-bold mb-4">Tentang Kami</h3>
            <p className="text-sm text-white">
              Kami adalah perusahaan yang berkomitmen untuk menciptakan kota Malang yang lebih bersih dan hijau. Dengan layanan pengelolaan sampah yang terintegrasi, kami berusaha untuk memberikan solusi berkelanjutan untuk masalah sampah kota.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold mb-4">Hubungi Kami</h3>
            <ul className="text-sm text-white">
              <li className="mb-2">
                <span className="mr-2">•</span> Alamat: Jl. Contoh No. 123, Kota Malang, Indonesia
              </li>
              <li className="mb-2">
                <span className="mr-2">•</span> Telepon: +62 123 4567 890
              </li>
              <li className="mb-2">
                <span className="mr-2">•</span> Email: info@urbancare.com
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-4">Produk Kami</h3>
            <ul className="text-sm text-white">
              <li className="mb-2">
                <span className="mr-2">•</span> Kompos Organik: Kompos yang dihasilkan dari pengolahan sampah organik.
              </li>
              <li className="mb-2">
                <span className="mr-2">•</span> Produk Daur Ulang: Produk kreatif dan fungsional dari hasil daur ulang sampah.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;