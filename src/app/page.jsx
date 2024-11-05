"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import { DineroProvider } from './[Cuentas]/DineroContext';
import { AuthProvider } from './[Login]/AuthContext'; 
import Layout from './[Layout]/layout';
import Prestamo from './[Prestamo]/prestamo';
import Convert from './[Conversor]/convert';
import DineroDisp from './[Cuentas]/DineroDisp';
import HelpCenter from './[Help]/Helpcenter';
import Cuentas from './[Cuentas]/Cuentas';
import Login from './[Login]/Login';
import Signup from './[Login]/Signup';
import Tarjetas from './[Tarjetas]/Tarjetas';
import ProtectedRoute from './[Login]/ProtectedRoute'; 
import LandPage from './[Inicio]/Inicio';
import Head from 'next/head';
import Factura from './[Facturas]/Facturas';

export default function Page() {
  const pathname = usePathname();

  const element = (
    <Layout>
      {pathname === '/inicio' && <ProtectedRoute element={<LandPage />} />}
      {pathname === '/login' && <Login />}
      {pathname === '/signup' && <Signup />}
      {pathname === '/prestamos' && <ProtectedRoute element={<Prestamo />} />}
      {pathname === '/transferencias' && <ProtectedRoute element={<DineroDisp />} />}
      {pathname === '/cuentas' && <ProtectedRoute element={<Cuentas />} />}
      {pathname === '/tarjetas' && <ProtectedRoute element={<Tarjetas />} />}
      {pathname === '/convertidor' && <ProtectedRoute element={<Convert />} />}
      {pathname === '/helpcenter' && <HelpCenter />}
      {pathname === '/facturas' && <Factura factura={undefined} />}
    </Layout>
  );

  return (
    <>
      <Head>
        <meta name="description" content="timebank" />
        <meta name="keywords" content="banco, homebanking, prestamos, dinero, convertidor, moneda, impuestos, rentas, tarjetas, comprar, creditos" />
      </Head>
      <AuthProvider>
        <DineroProvider>
          {element}
        </DineroProvider>
      </AuthProvider>
    </>
  );
}




