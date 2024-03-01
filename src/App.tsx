import React from 'react';

import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import { TipoDeFolhaList } from './pages/tipoDeFolha/tipoDeFolhaList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ConvenioList } from './pages/convenios/convenioList';
import { AdvertenciaList } from './pages/advertencia/advertenciaList';
import { AfastamentoList } from './pages/afastamento/afastamentoList';
import { AtividadesList } from './pages/atividades/atividadesList';
import { CargosList } from './pages/cargos/cargosList';
import { EncargosList } from './pages/encargos/encargosList';
import { FaltasAtrasosList } from './pages/faltasAtrasos/faltasAtrasosList';
import { HorasExtrasList } from './pages/horasExtras/horasExtrasList';
import { ModeloContratoList } from './pages/modeloContrato/modeloContratoList';
import { ParametroList } from './pages/parametro/parametroList';
import { ProvisoesList } from './pages/provisoes/provisoesList';
import { TransferenciaCrList } from './pages/transferenciaCr/transferenciaCrList';
import {
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query';
import { HomePage } from './pages/home/home';
import { AdvertenciaForm } from './pages/advertencia/advertenciaForm';
import { AfastamentoForm } from './pages/afastamento/afastamentoForm';
import { AtividadeForm } from './pages/atividades/atividadeForm';
import { CargosForm } from './pages/cargos/cargosForm';
import {  ConvenioForm } from './pages/convenios/conveniosForm';
import { EncargoForm } from './pages/encargos/encargosForm';
import { FaltasAtrasosForm } from './pages/faltasAtrasos/faltasAtrasosForm';
import { ModeloContratoForm } from './pages/modeloContrato/modeloContratoForm';
import { ProvisoesForm } from './pages/provisoes/provisoesForm';
import { ParametroForm } from './pages/parametro/parametroForm';
import { TipoFolhaForm } from './pages/tipoDeFolha/tipoDeFolhaForm';
import { HorasExtrasForm } from './pages/horasExtras/horasExtrasForm';
const router = createBrowserRouter([
	{
		path: '/tipoFolhaLista',
		element: <TipoDeFolhaList />, 
	},
	{
		path: '/convenioLista',
		element: <ConvenioList />,
	},
	{
		path: '/AdvertenciaLista',
		element: <AdvertenciaList />,
	},
	{
		path: '/AfastamentoLista',
		element: <AfastamentoList />,
	},
	{
		path: '/atividadesLista',
		element: <AtividadesList />,
	},
	{
		path: '/CargosLista',
		element: <CargosList/>
	},
	{
		path: '/EncargosLista',
		element: <EncargosList />
	},
	{
		path: '/FaltasAtrasosLista',
		element: <FaltasAtrasosList />
	},
	{
		path: '/HorasExtrasLista',
		element: <HorasExtrasList />
	},
	{
		path: '/ModeloContratoLista',
		element: <ModeloContratoList />
	},
	{
		path: '/ParametroLista',
		element: <ParametroList />	
	},
	{
		path: '/ProvisoesLista',
		element: <ProvisoesList />
	},
	{
		path: 'TransferenciaCrList/:id',
		element: <TransferenciaCrList/>
	},
	{
		path: '/TipoFolhaForm/:id',
		element: <TipoFolhaForm />,
	},
	{
		path: '/convenioForm/:id',
		element: <ConvenioForm />,
	},
	{
		path: '/AdvertenciaForm/:id',
		element: <AdvertenciaForm />,
	},
	{
		path: '/AfastamentoForm/:id',
		element: <AfastamentoForm />,
	},
	{
		path: '/atividadesForm/:id',
		element: <AtividadeForm />,
	},
	{
		path: '/CargosForm/:id',
		element: <CargosForm />
	},
	{
		path: '/EncargosForm/:id',
		element: <EncargoForm />
	},
	{
		path: '/FaltasAtrasosForm/:id',
		element: <FaltasAtrasosForm />
	},
	{
		path: '/HorasExtrasForm/:id',
		element: <HorasExtrasForm />
	},
	{
		path: '/ModeloContratoForm/:id',
		element: <ModeloContratoForm />
	},
	{
		path: '/ParametroForm/:id',
		element: <ParametroForm />
	},
	{
		path: '/ProvisoesForm/:id',
		element: <ProvisoesForm/>
	},
	{
		path: '/TransferenciaCrForm/:id',
		element: <TransferenciaCrList />
	},
	{
		path: '/',
		element: <HomePage/>
	},
	{
		path: '/ConvenioLista',
		element: <ConvenioList/>
	}
]);

export default function App(): React.ReactNode {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
}
