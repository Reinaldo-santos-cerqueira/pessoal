import React, { useEffect } from 'react';
import { TopBar } from '../../components/topBar/topBar';
import { Box } from '@mui/material';
import { Form } from '../../components/form/form';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ConvenioSchema, convenioSchema } from './convenioSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'react-router-dom';
import { ConvenioService } from '../../domain/convenio/convenioService';
import { ToastContainer, toast } from 'react-toastify';


export const ConvenioForm = (): React.ReactNode => {
	const { id } = useParams();
	const { register, handleSubmit, setValue, formState: { errors } } = useForm<ConvenioSchema>({
		resolver: zodResolver(convenioSchema),
		defaultValues: {
			convenio: ''
		},
		mode: 'onChange'
	});
	useEffect(() => {
		(
			async () => {
				if (Number(id) !== 0) {
					ConvenioService.getById(Number(id))
						.then((response) => {
							setValue('convenio', response.convenio);
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

	const onSubmit: SubmitHandler<ConvenioSchema> = (data) => {
		if (Number(id) === 0) {
			ConvenioService.post({ ...data, id: 0 })
				.then(() => {
					toast.success('Salvo com sucesso');
				})
				.catch((error) => {
					toast.error(error.response.data.message);
				});

		} else {
			ConvenioService.put({ ...data, id: Number(id) })
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
						<textarea style={{ minHeight: 150, resize: 'none' }}  {...register('convenio')} className="form-control" id="convenio" name='convenio' placeholder='Digite a convenio' />
						<label className="form-label" htmlFor='motivo_convenio'>Convenio</label>
						{errors.convenio && <TextError text={errors.convenio.message + ''} />}
					</div >
				</div>
			</form>
		</div>
	);
	return (
		<Box style={{ backgroundColor: '#EDF0F7', minWidth: '100%', minHeight: '100vh' }}>
			<TopBar />
			<Form
				title='Convenio'
				subTitle={`${Number(id) === 0 ? 'Cadastre um' : 'Atualize um'}  convenio`}
				formHtml={form}
				goBack={'/ConvenioLista'}
				handleSubmit={handleSubmit(onSubmit)}
				titleBtn={`${Number(id) === 0 ? 'Salvar' : 'Atualizar'}`}
			/>
			<ToastContainer />
		</Box>
	);
};