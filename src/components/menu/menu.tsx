import { Button, Collapse, List, ListItem, ListItemText } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
interface props{
	open: boolean;
}
export function Menu({ open }: props): React.ReactNode{
	const [openCadastro, setOpenCadastro] = useState(false);
	const [openFuncionarios, setOpenFuncionarios] = useState(false);
	const [openFolha, setOpenFolha] = useState(false);
	const [openConfiguracoes, setOpenConfiguracoes] = useState(false);
	const [openAuditoria, setOpenAuditoria] = useState(false);
	const [openHoraExtra, setOpenhoraExtra] = useState(false);

	const handleToggle = (section: string) => {
		switch (section) {
		case 'cadastro':
			setOpenCadastro(!openCadastro);
			break;
		case 'funcionarios':
			setOpenFuncionarios(!openFuncionarios);
			break;
		case 'folha':
			setOpenFolha(!openFolha);
			break;
		case 'configuracoes':
			setOpenConfiguracoes(!openConfiguracoes);
			break;
		case 'auditoria':
			setOpenAuditoria(!openAuditoria);
			break;
		case 'horaExtra':
			setOpenhoraExtra(!openHoraExtra);
			break;
		default:
			break;
		}
	};

	return (
		<div style={{
			width: '250px', height: '100vh', position: 'absolute', display: 'block', background: '#FFF', top: 0, left: open ? '0' : '-250px', zIndex: 1000, WebkitBoxShadow: '1px 0px 5px 1px rgba(0,0,0,0.36)', transition: 'all 1s',
			MozBoxShadow: '1px 0px 5px 1px rgba(0,0,0,0.36)',
			boxShadow: '1px 0px 5px 1px rgba(0,0,0,0.36)',
			overflowY: 'auto'
		}}>
			<Button onClick={() => handleToggle('cadastro')}>CADASTRO</Button>
			<Collapse in={openCadastro}>
				<List>
					<ListItem >
						<Link to='/tipoFolhaLista'>Tipos de Folha</Link>
					</ListItem>
					<ListItem >
						<Link to='/ConvenioLista'>Convênios</Link>
					</ListItem>
					<ListItem >
						<Link to='/EncargosLista'>Encargos</Link>
					</ListItem>
					<ListItem >
						<Link to='/provisoesLista'>Provisões</Link>
					</ListItem>
					<ListItem >
						<Link to='/AtividadesLista'>Atividades</Link>
					</ListItem>
					<ListItem >
						<Link to='/CargosLista'>Cargos</Link>
					</ListItem>
					<ListItem >
						<Link to='/ModeloContratoLista'>Modelos de contrato</Link>
					</ListItem>
					
				</List>
			</Collapse>
			<Button onClick={() => handleToggle('funcionarios')}>FUNCIONÁRIOS</Button>
			<Collapse in={openFuncionarios}>
				<List>
					<ListItem >
						<ListItemText primary="Contratação" />
					</ListItem>
					<ListItem onClick={() => handleToggle('horaExtra')} style={{ flexDirection: 'column',alignItems: 'flex-start'}}>
						<ListItemText primary="Horas Extras" />
						<Collapse in={openHoraExtra}>
							<List>
								<ListItem >
									<Link to='/HorasExtrasLista'>Solicitações</Link>
								</ListItem>
								<ListItem >
									<ListItemText primary="Registro de Ponto" />
								</ListItem>
							</List>
						</Collapse>
					</ListItem>
					<ListItem >
						<Link to='/FaltasAtrasosLista'>Atraso e faltas</Link>
					</ListItem>
					<ListItem >
						<ListItemText primary="Prejuízos" />
					</ListItem>
					<ListItem >
						<Link to='/AfastamentoLista'>Afastamentos</Link>
					</ListItem>
					<ListItem >
						<Link to='/AdvertenciaLista'>Advertências</Link>
					</ListItem>
					<ListItem >
						<ListItemText primary="Transferência" />
					</ListItem>
					<ListItem >
						<ListItemText primary="Rateio entre CR's" />
					</ListItem>
				</List>
			</Collapse>
			<Button onClick={() => handleToggle('folha')}>FOLHA</Button>
			<Collapse in={openFolha}>
				<List>
					<ListItem >
						<ListItemText primary="Folha Base" />
					</ListItem>
					<ListItem >
						<ListItemText primary="Folha de Pagamento" />
					</ListItem>
				</List>
			</Collapse>
			<Button onClick={() => handleToggle('configuracoes')}>CONFIGURAÇÕES</Button>
			<Collapse in={openConfiguracoes}>
				<List>
					<ListItem >
						<Link to='/ParametroLista'>Parâmetros Gerais</Link>
					</ListItem>
				</List>
			</Collapse>
			<Button onClick={() => handleToggle('auditoria')}>AUDITORIA</Button>
			<Collapse in={openAuditoria}>
				<List>
					<ListItem >
						<ListItemText primary="Log de Sistema" />
					</ListItem>
				</List>
			</Collapse>
		</div>
	);
}