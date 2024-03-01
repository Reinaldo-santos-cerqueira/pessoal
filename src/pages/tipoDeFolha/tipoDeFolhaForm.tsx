import React, { useEffect } from 'react';
import { TopBar } from '../../components/topBar/topBar';
import { Box } from '@mui/material';
import { Form } from '../../components/form/form';
import { useForm, SubmitHandler } from 'react-hook-form';
import { tipodefolhaSchema, TipoDeFolhaSchema } from './tipoDeFolhaSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'react-router-dom';
import { TipoFolhaService } from '../../domain/tipoFolha/tipoFolhaService';
import { ToastContainer, toast } from 'react-toastify';


export const TipoFolhaForm = (): React.ReactNode => {
	const { id } = useParams();
	const { register, handleSubmit, setValue, formState: { errors } } = useForm<TipoDeFolhaSchema>({
		resolver: zodResolver(tipodefolhaSchema),
		defaultValues: {
			tipo_folha: ''
		},
		mode: 'onChange'
	});
	useEffect(() => {
		(
			async () => {
				if (Number(id) !== 0) {
					TipoFolhaService.getById(Number(id))
						.then((response) => {
							setValue('tipo_folha', response.tipo_folha);
						})
						.catch((error) => {
							toast.error(error.response.datam.essage);
						});
				}
			}
		)();
	}, []);
	const TextError = ({ text }: { text: string }): React.ReactElement => (
		<p style={{ color: '#FF0000', textAlign: 'center', marginTop: 5 }}	>{text}</p>
	);

	const onSubmit: SubmitHandler<TipoDeFolhaSchema> = (data) => {
		if (Number(id) === 0) {
			TipoFolhaService.post({ ...data, id: 0 })
				.then(() => {
					toast.success('Salvo com sucess');
				})
				.catch((error) => {
					toast.error(error.response.datam.essage);
				});

		} else {
			TipoFolhaService.put({ ...data, id: Number(id) })
				.then(() => {
					toast.success('Salvo com sucess');
				})
				.catch((error) => {
					toast.error(error.response.datam.essage);
				});
		}
	};

	const form = (
		<div className="block-content tab-pane active show bg-white" >
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="col-lg-8 col-xl-12">
					<div className="form-floating mb-4 form-group">
						<textarea style={{ minHeight: 150, resize: 'none' }}  {...register('tipo_folha')} className="form-control" id="tipo_folha" name='tipo_folha' placeholder='Digite o tipo de folha' />
						<label className="form-label" htmlFor='tipo_folha'>Tipo de folha</label>
						{errors.tipo_folha && <TextError text={errors.tipo_folha.message + ''} />}
					</div >
				</div>
			</form>
		</div>
	);
	return (
		<Box style={{ backgroundColor: '#EDF0F7', minWidth: '100%', minHeight: '100vh' }}>
			<TopBar />
			<Form
				title='Tipo de folha'
				subTitle={`${Number(id) === 0 ? 'Cadastre uma nova' : 'Atualize uma'} tipo de folha`}
				formHtml={form}
				goBack={'/tipoFolhaLista'}
				handleSubmit={handleSubmit(onSubmit)}
				titleBtn={`${Number(id) === 0 ? 'Salvar' : 'Atualizar'}`}
			/>
			<ToastContainer />
		</Box>
	);
};