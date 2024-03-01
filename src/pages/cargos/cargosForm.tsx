import React, { useEffect, useState } from 'react';
import { TopBar } from '../../components/topBar/topBar';
import { Box } from '@mui/material';
import { Form } from '../../components/form/form';
import { useForm, SubmitHandler } from 'react-hook-form';
import { CargosSchema, cargosSchema} from './cargoSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'react-router-dom';
import { CargoService } from '../../domain/cargos/cargosService';
import { JornadaTrabalho } from '../../domain/jornaldaTrabalho/types';
import { JornadaTrabalhoService } from '../../domain/jornaldaTrabalho/jornaldaTrabalhoService';
import { ToastContainer, toast } from 'react-toastify';

export const CargosForm = (): React.ReactNode => {
	const { id } = useParams();
	const [jornadaTrabalho, setJornadaTrabalho] = useState<JornadaTrabalho[]>([]);
	const { register, handleSubmit, setValue, formState: { errors } } = useForm<CargosSchema>({
		resolver: zodResolver(cargosSchema),
		defaultValues: {
			cargo: '',
			remuneracao: '',
			comissao_direta: '',
			comissao_indireta: '',
			jornada_trabalho_id: ''
		},
		mode: 'onChange'
	});

	useEffect(() => {
		(
			async () => {
				JornadaTrabalhoService.get()
					.then((response) => {
						setJornadaTrabalho(response);
					})
					.catch((error) => {
						toast.error(error.response.data.message);
					});
			}
		)();
	}, []);
	useEffect(() => {
		(
			async () => {
				if (Number(id) !== 0) {
					CargoService.getById(Number(id))
						.then((response) => {

							const {
								cargo,
								remuneracao,
								comissao_direta,
								comissao_indireta,
								jornada_trabalho_id
							} = response;
							setValue(
								'remuneracao', remuneracao + ''
							);
							setValue(
								'comissao_direta', comissao_direta + ''
							);
							setValue(
								'cargo', cargo
							);
							setValue(
								'comissao_indireta', comissao_indireta + ''
							);
							setValue(
								'jornada_trabalho_id', jornada_trabalho_id +''
							);
						})
						.catch((error) => {
							toast.error(error.response.data.message);
						});
				}
			}
		)();
	}, []);
	const TextError = ({ text }: { text: string }): React.ReactElement => (
		<p style={{ color: '#FF0000', textAlign: 'center', marginTop: 5 }}	>{text}</p>
	);
	//const onSubmit: SubmitHandler<CargosSchema> = (data) => console.log(data);

	const onSubmit: SubmitHandler<CargosSchema> = (data) => {
		if (Number(id) === 0) {
			CargoService.post({
				id: 0,
				jornada_trabalho_id: Number(data.jornada_trabalho_id),
				remuneracao: Number(data.remuneracao),
				comissao_direta: Number(data.comissao_direta),
				comissao_indireta: Number(data.comissao_indireta),
				cargo: data.cargo
			})
				.then(() => {
					toast.success('Salvo com sucesso');
				})
				.catch((error) => {
					toast.error(error.response.data.message);
				});
		} else {
			CargoService.put({
				id: Number(id),
				jornada_trabalho_id: Number(data.jornada_trabalho_id),
				remuneracao: Number(data.remuneracao),
				comissao_direta: Number(data.comissao_direta),
				comissao_indireta: Number(data.comissao_indireta),
				cargo: data.cargo
			})
				.then(() => {
					toast.success('Salvo com sucesso');
				})
				.catch((error) => {
					toast.error(error.response.data.message);
				});
		}
	};

	const form = (
		<div className="block-content tab-pane active show bg-white" >
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='row'>
					<div className="col-lg-8 col-xl-3">
						<div className="form-floating mb-4 form-group">
							<select {...register('jornada_trabalho_id')} defaultValue={0} name="jornada_trabalho_id" className='form-select'>
								<option value={0} disabled>Selecione uma jornada trabalho</option>
								{
									jornadaTrabalho.map((jornadaTrabalhos) => {
										return (
											<option value={jornadaTrabalhos.id} key={jornadaTrabalhos.id}>{jornadaTrabalhos.jornada_trabalho}</option>
										);
									})
								}
							</select>
							<label className="form-label" htmlFor="jornada_trabalho_id">Jornada trabalho</label>
							{errors.jornada_trabalho_id && <TextError text={errors.jornada_trabalho_id.message + ''} />}
						</div >
						
					</div>
					<div className="col-lg-8 col-xl-3">
						<div className="form-floating mb-4 form-group">
							<input type='number' className="form-control"{...register('remuneracao')} id="remuneracao" name="remuneracao" />
							<label className="form-label" htmlFor="remuneracao">Remuneração</label>
							{errors.remuneracao && <TextError text={errors.remuneracao.message + ''} />}

						</div>
					</div>
					<div className="col-lg-8 col-xl-3">
						<div className="form-floating mb-4 form-group">
							<input type='number' className="form-control"{...register('comissao_direta')} id="comissao_direta" name="comissao_direta" />
							<label className="form-label" htmlFor="comissao_direta">Comissão direta</label>
							{errors.comissao_direta && <TextError text={errors.comissao_direta.message + ''} />}

						</div>
					</div>
					<div className="col-lg-8 col-xl-3">
						<div className="form-floating mb-4 form-group">
							<input type='number' className="form-control"{...register('comissao_indireta')} id="comissao_indireta" name="comissao_indireta" />
							<label className="form-label" htmlFor="comissao_indireta">Comissão indireta</label>
							{errors.comissao_indireta && <TextError text={errors.comissao_indireta.message + ''} />}

						</div>
					</div>
				</div>
				<div className="col-lg-8 col-xl-12">
					<div className="form-floating mb-4 form-group">
						<textarea style={{ minHeight: 150, resize: 'none' }}  {...register('cargo')} className="form-control" id="cargo" name='cargo' placeholder='Digite a sua cargo' />
						<label className="form-label" htmlFor='cargo'>Cargo</label>
						{errors.cargo && <TextError text={errors.cargo.message + ''} />}
					</div >
				</div>
			</form>
		</div>
	);
	return (
		<Box style={{ backgroundColor: '#EDF0F7', minWidth: '100%', minHeight: '100vh' }}>
			<TopBar />
			<Form
				title='Cargo'
				subTitle={`${Number(id) === 0 ? 'Cadastre uma nova' : 'Atualize uma'}  cargo`}
				formHtml={form}
				goBack={'/CargosLista'}
				handleSubmit={handleSubmit(onSubmit)}
				titleBtn={`${Number(id) === 0 ? 'Salvar' : 'Atualizar'}`}
			/>
			<ToastContainer />
		</Box>
	);
};