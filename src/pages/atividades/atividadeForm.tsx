import React, { useEffect } from 'react';
import { TopBar } from '../../components/topBar/topBar';
import { Box } from '@mui/material';
import { Form } from '../../components/form/form';
import { useForm, SubmitHandler } from 'react-hook-form';
import { AtividadeSchema, atividadeSchema } from './atividadeSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'react-router-dom';
import { AtividadeService } from '../../domain/atividades/atividadesService';
import { ToastContainer, toast } from 'react-toastify';


export const AtividadeForm = (): React.ReactNode => {
	const { id } = useParams();
	const { register, handleSubmit, setValue, formState: { errors } } = useForm<AtividadeSchema>({
		resolver: zodResolver(atividadeSchema),
		defaultValues: {
			atividade: ''
		},
		mode: 'onChange'
	});
	useEffect(() => {
		(
			async () => {
				if (Number(id) !== 0) {
					AtividadeService.getById(Number(id))
						.then((response) => {
							setValue('atividade', response.atividade);
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

	const onSubmit: SubmitHandler<AtividadeSchema> = (data) => {
		if (Number(id) === 0) {
			AtividadeService.post({ ...data, id: 0 })
				.then(() => {
					toast.success('Salvo com sucesso');
				})
				.catch((error) => {
					toast.error(error.response.data.message);
				});
		} else {
			AtividadeService.put({ ...data, id: Number(id) })
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
						<textarea style={{ minHeight: 150, resize: 'none' }}  {...register('atividade')} className="form-control" id="atividade" name='atividade' placeholder='Digite a atividade' />
						<label className="form-label" htmlFor='motivo_atividade'>Atividade</label>
						{errors.atividade && <TextError text={errors.atividade.message + ''} />}
					</div >
				</div>
			</form>
		</div>
	);
	return (
		<Box style={{ backgroundColor: '#EDF0F7', minWidth: '100%', minHeight: '100vh' }}>
			<TopBar />
			<Form
				title='Atividade'
				subTitle={`${Number(id) === 0 ? 'Cadastre uma nova' : 'Atualize uma'}  atividade`}
				formHtml={form}
				goBack={'/AtividadesLista'}
				handleSubmit={handleSubmit(onSubmit)}
				titleBtn={`${Number(id) === 0 ? 'Salvar' : 'Atualizar'}`}
			/>
			<ToastContainer />
		</Box>
	);
};