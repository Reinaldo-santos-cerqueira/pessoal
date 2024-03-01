import React, { useEffect } from 'react';
import { TopBar } from '../../components/topBar/topBar';
import { Box } from '@mui/material';
import { Form } from '../../components/form/form';
import { useForm, SubmitHandler } from 'react-hook-form';
import { EncargoSchema, encargoSchema } from './encargosSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'react-router-dom';
import { EncargoService } from '../../domain/encargos/encargosService';
import { ToastContainer, toast } from 'react-toastify';


export const EncargoForm = (): React.ReactNode => {
	const { id } = useParams();
	const { register, handleSubmit, setValue, formState: { errors } } = useForm<EncargoSchema>({
		resolver: zodResolver(encargoSchema),
		defaultValues: {
			encargo: ''
		},
		mode: 'onChange'
	});
	useEffect(() => {
		(
			async () => {
				if (Number(id) !== 0) {
					EncargoService.getById(Number(id))
						.then((response) => {
							setValue('encargo', response.encargo);
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

	const onSubmit: SubmitHandler<EncargoSchema> = (data) => {
		if (Number(id) === 0) {
			EncargoService.post({ ...data, id: 0 })
				.then(() => {
					toast.success('Salvo com sucesso');
				})
				.catch((error) => {
					toast.error(error.response.data.message);
				});
		} else {
			EncargoService.put({ ...data, id: Number(id) })
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
				<div className="col-lg-8 col-xl-12">
					<div className="form-floating mb-4 form-group">
						<textarea style={{ minHeight: 150, resize: 'none' }}  {...register('encargo')} className="form-control" id="encargo" name='encargo' placeholder='Digite a convenio' />
						<label className="form-label" htmlFor='encargo'>Encargo</label>
						{errors.encargo && <TextError text={errors.encargo.message + ''} />}
					</div >
				</div>
			</form>
		</div>
	);
	return (
		<Box style={{ backgroundColor: '#EDF0F7', minWidth: '100%', minHeight: '100vh' }}>
			<TopBar />
			<Form
				title='Encargos'
				subTitle={`${Number(id) === 0 ? 'Cadastre um' : 'Atualize um'}  encargo`}
				formHtml={form}
				goBack={'/encargosLista'}
				handleSubmit={handleSubmit(onSubmit)}
				titleBtn={`${Number(id) === 0 ? 'Salvar' : 'Atualizar'}`}
			/>
			<ToastContainer />
		</Box>
	);
};