import React, { useEffect } from 'react';
import { TopBar } from '../../components/topBar/topBar';
import { Box } from '@mui/material';
import { Form } from '../../components/form/form';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ProvisoesSchema, provisoesSchema } from './provisoesSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'react-router-dom';
import { ProvisoesService } from '../../domain/provisoes/provisoesService';
import { ToastContainer, toast } from 'react-toastify';


export const ProvisoesForm = (): React.ReactNode => {
	const { id } = useParams();
	const { register, handleSubmit, setValue, formState: { errors } } = useForm<ProvisoesSchema>({
		resolver: zodResolver(provisoesSchema),
		defaultValues: {
			provisao: ''
		},
		mode: 'onChange'
	});
	useEffect(() => {
		(
			async () => {
				if (Number(id) !== 0) {
					ProvisoesService.getById(Number(id))
						.then((response) => {
							setValue('provisao', response.provisao);
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

	const onSubmit: SubmitHandler<ProvisoesSchema> = (data) => {
		if (Number(id) === 0) {
			ProvisoesService.post({ ...data, id: 0 })
				.then(() => {
					toast.success('Salvo com sucesso');
				})
				.catch((error) => {
					toast.error(error.response.data.message);
				});

		} else {
			ProvisoesService.put({ ...data, id: Number(id) })
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
						<textarea style={{ minHeight: 150, resize: 'none' }}  {...register('provisao')} className="form-control" id="provisao" name='provisao' placeholder='Digite a convenio' />
						<label className="form-label" htmlFor='provisao'>Provisao</label>
						{errors.provisao && <TextError text={errors.provisao.message + ''} />}
					</div >
				</div>
			</form>
		</div>
	);
	return (
		<Box style={{ backgroundColor: '#EDF0F7', minWidth: '100%', minHeight: '100vh' }}>
			<TopBar />
			<Form
				title='Provisões'
				subTitle={`${Number(id) === 0 ? 'Cadastre uma nova' : 'Atualize uma'} provisão`}
				formHtml={form}
				goBack={'/ProvisoesLista'}
				handleSubmit={handleSubmit(onSubmit)}
				titleBtn={`${Number(id) === 0 ? 'Salvar' : 'Atualizar'}`}
			/>
			<ToastContainer />
		</Box>
	);
};