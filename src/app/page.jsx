"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
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
import Historial from './[Facturas]/Historial';

const index = () => {
  const router = useRouter();

  const element = (
    <Layout>
      {
        router.pathname === '/inicio' && <ProtectedRoute element={<LandPage />} />
      }
      {
        router.pathname === '/login' && <Login />
      }
      {
        router.pathname === '/signup' && <Signup />
      }
      {
        router.pathname === '/prestamos' && <ProtectedRoute element={<Prestamo />} />
      }
      {
        router.pathname === '/transferencias' && <ProtectedRoute element={<DineroDisp />} />
      }
      {
        router.pathname === '/cuentas' && <ProtectedRoute element={<Cuentas />} />
      }
      {
        router.pathname === '/tarjetas' && <ProtectedRoute element={<Tarjetas />} />
      }
      {
        router.pathname === '/convertidor' && <ProtectedRoute element={<Convert />} />
      }
      {
        router.pathname === '/helpcenter' && <HelpCenter />
      }
      {
        router.pathname === '/facturas' && <Factura factura={undefined} />
      }
    </Layout>
  );

  return (
    <>
      <Head>
        <meta name="description" content="timebank" />
        <meta name="description" content="banco" />
        <meta name="keywords" content="banco, homebanking, prestamos, dinero, convertidor, moneda, impuestos, rentas, tarjetas, comprar, creditos" />
      </Head>
      <AuthProvider>
        <DineroProvider>
          {element}
        </DineroProvider>
      </AuthProvider>
    </>
  );
};

export default index;



