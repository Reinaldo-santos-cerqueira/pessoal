import React, { useEffect, useState } from 'react';
import { TopBar } from '../../components/topBar/topBar';
import { Box } from '@mui/material';
import { Form } from '../../components/form/form';
import { useForm, SubmitHandler } from 'react-hook-form';
import { modelocontratoSchema, ModeloContratoSchema } from './modeloContratoSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'react-router-dom';
import { ModeloContratoService } from '../../domain/modeloContrato/modeloContratoService';
import { CargoService } from '../../domain/cargos/cargosService';
import { Cargo } from '../../domain/cargos/types';
import { ToastContainer, toast } from 'react-toastify';


export const ModeloContratoForm = (): React.ReactNode => {
	const { id } = useParams();
	const [cargo, setCargos] = useState<Cargo[]>([]);

	const { register, handleSubmit, setValue, formState: { errors } } = useForm<ModeloContratoSchema>({
		resolver: zodResolver(modelocontratoSchema),
		defaultValues: {
			cargo_id: '0',
			modelo: '',
			numero_modelo: '0'
		},
		mode: 'onChange'
	});

	useEffect(() => {
		(
			async () => {
				CargoService.get()
					.then((response) => {
						setCargos(response);
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
					ModeloContratoService.getById(Number(id))
						.then((response) => {
							setValue('modelo', response.modelo);
							setValue('numero_modelo', response.numero_modelo);
							setValue('cargo_id', response.cargo_id + '');
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

	const onSubmit: SubmitHandler<ModeloContratoSchema> = (data) => {
		if (Number(id) === 0) {
			ModeloContratoService.post({ ...data, id: 0, cargo_id: Number(data.cargo_id) })
				.then(() => {
					toast.success('Salvo com sucesso');
				})
				.catch((error) => {
					toast.error(error.response.data.message);
				});

		} else {
			ModeloContratoService.put({ ...data, id: Number(id), cargo_id: Number(data.cargo_id) })
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
				<div className="row">
					<div className="col-lg-8 col-xl-6">
						<div className="form-floating mb-4 form-group">
							<select {...register('cargo_id')} defaultValue="0" name="cargo_id" className='form-select'>
								<option value="0" disabled>Selecione um cargo</option>

								{
									cargo.map((cargo) => {
										return (
											<option value={cargo.id} key={cargo.id}>{cargo.cargo}</option>
										);
									
									})
								}
							</select>
							<label className="form-label" htmlFor="cargo_id">Cargos</label>
							{errors.cargo_id && <TextError text={errors.cargo_id.message + ''} />}
						</div>
					</div>
					<div className="col-lg-8 col-xl-6">
						<div className="form-floating mb-4 form-group">
							<input   {...register('numero_modelo')} className="form-control" id="numero_modelo" name='numero_modelo' placeholder='Digite o numero modelo' />
							<label className="form-label" htmlFor='encargo'>numero modelo</label>
							{errors.numero_modelo && <TextError text={errors.numero_modelo.message + ''} />}
						</div >
					</div>
				</div>
				<div className="col-lg-8 col-xl-12">
					<div className="form-floating mb-4 form-group">
						<textarea style={{ minHeight: 150, resize: 'none' }}  {...register('modelo')} className="form-control" id="modelo" name='modelo' placeholder='Digite o modelo' />
						<label className="form-label" htmlFor='modelo'>Modelo</label>
						{errors.modelo && <TextError text={errors.modelo.message + ''} />}
					</div >
				</div>
			</form>
		</div>
	);
	return (
		<Box style={{ backgroundColor: '#EDF0F7', minWidth: '100%', minHeight: '100vh' }}>
			<TopBar />
			<Form
				title='Modelo de contrato'
				subTitle={`${Number(id) === 0 ? 'Cadastre uma nova' : 'Atualize uma'}  modelo de contrato`}
				formHtml={form}
				goBack={'/modeloContratoLista'}
				handleSubmit={handleSubmit(onSubmit)}
				titleBtn={`${Number(id) === 0 ? 'Salvar' : 'Atualizar'}`}
			/>
			<ToastContainer />
		</Box>
	);
};