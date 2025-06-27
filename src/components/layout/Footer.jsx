import React from "react";
import { Link } from "react-router-dom";
import {
  Linkedin,
  Facebook,
  Instagram,
  Twitter
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="flex flex-col box-border bg-bg-primary border-t border-border-default p-5 md:px-30 md:py-15 gap-5">
      <div className="flex flex-wrap justify-between">
        {/* Kolom 1: Logo dan Deskripsi */}
        <div className="flex flex-col gap-4">
          <Link to="/">
            <img
              src="/logoMaster.png"
              alt="Logo"
              className="w-[152px] h-[42px] sm:w-[237px] sm:h-[56px]"
            />
          </Link>
          <div className="max-w-[352px] flex flex-col gap-3">
            <p className="font-dm-sans text-text-dark-primary font-bold text-base leading-myline-2 tracking-myletter-2">
              Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
            </p>
            <p className="font-dm-sans font-normal text-text-dark-primary text-base leading-myline-2 tracking-myletter-2">
              Jl. Usman Effendi No. 50 Lowokwaru, Malang
            </p>
            <p className="font-dm-sans font-normal text-text-dark-primary text-base leading-myline-2 tracking-myletter-2">
              +62-877-7123-1234
            </p>
          </div>
        </div>

        <div className="w-full max-w-[485px] flex flex-wrap gap-12">
          {/* Kolom 2: Kategori */}
          <div className="flex flex-col gap-4">
            <h3 className="font-dm-sans font-bold text-base text-text-dark-primary">Kategori</h3>
            <ul className="flex flex-col gap-3 font-dm-sans font-medium text-base text-text-dark-secondary leading-myline-2 tracking-myletter-2">
              <li>Digital & Teknologi</li>
              <li>Pemasaran</li>
              <li>Manajemen Bisnis</li>
              <li>Pengembangan Diri</li>
              <li>Desain</li>
            </ul>
          </div>

          {/* Kolom 3: Perusahaan */}
          <div className="flex flex-col gap-4">
            <h3 className="font-dm-sans font-bold text-base text-text-dark-primary">Perusahaan</h3>
            <ul className="flex flex-col gap-3 font-dm-sans font-medium text-base text-text-dark-secondary leading-myline-2 tracking-myletter-2">
              <li>Tentang Kami</li>
              <li>FAQ</li>
              <li>Kebijakan Privasi</li>
              <li>Ketentuan Layanan</li>
              <li>Bantuan</li>
            </ul>
          </div>

          {/* Kolom 4: Komunitas */}
          <div className="flex flex-col gap-4">
            <h3 className="font-dm-sans font-bold text-base text-text-dark-primary">Komunitas</h3>
            <ul className="flex flex-col gap-3 font-dm-sans font-medium text-base text-text-dark-secondary leading-myline-2 tracking-myletter-2">
              <li>Tips Sukses</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bawah */}
      <div className="mt-9 border-t border-border-default pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-base font-medium text-text-dark-secondary leading-myline-2 tracking-myletter-2">©2023 Gerobak Sayur. All Rights Reserved.</p>
        <div className="flex gap-4">
  <a href="#" className="w-5 h-5 md:w-8 md:h-8 border md:border-2 rounded-full flex items-center justify-center text-text-dark-primary hover:text-text-dark-secondary">
    <Linkedin className="w-3 h-3 md:w-5 md:h-5" />
  </a>
  <a href="#" className="w-5 h-5 md:w-8 md:h-8 border md:border-2 rounded-full flex items-center justify-center text-text-dark-primary hover:text-text-dark-secondary">
    <Facebook className="w-3 h-3 md:w-5 md:h-5" />
  </a>
  <a href="#" className="w-5 h-5 md:w-8 md:h-8 border md:border-2 rounded-full flex items-center justify-center text-text-dark-primary hover:text-text-dark-secondary">
    <Instagram className="w-3 h-3 md:w-5 md:h-5" />
  </a>
  <a href="#" className="w-5 h-5 md:w-8 md:h-8 border md:border-2 rounded-full flex items-center justify-center text-text-dark-primary hover:text-text-dark-secondary">
    <Twitter className="w-3 h-3 md:w-5 md:h-5" />
  </a>
</div>


      </div>
    </footer>
  );
};

export default Footer;