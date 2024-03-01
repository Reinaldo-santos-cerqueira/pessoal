import React, { useEffect } from 'react';
import { TopBar } from '../../components/topBar/topBar';
import { Box } from '@mui/material';
import { Form } from '../../components/form/form';
import { useForm, SubmitHandler } from 'react-hook-form';
import { parametrosSchema,ParametrosSchema } from './parametroSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'react-router-dom';
import { ParametroService } from '../../domain/parametro/parametroService';
import { ToastContainer, toast } from 'react-toastify';

export const ParametroForm = (): React.ReactNode => {
	const { id } = useParams();
	const { register, handleSubmit, setValue, formState: { errors } } = useForm<ParametrosSchema>({
		resolver: zodResolver(parametrosSchema),
		defaultValues: {
			centro_resultado: '',
			limite_hora_extra_diario: '',
			limite_hora_extra_mensal: '',
			fornecedor_agrupador_id: '',
			insumo_mao_de_obra_id: '',
			servico_folha_pagamento_id: ''
		},
		mode: 'onChange'
	});

	useEffect(() => {
		(
			async () => {
				if (Number(id) !== 0) {
					ParametroService.getById(Number(id))
						.then((response) => {
							setValue('centro_resultado', response.centro_resultado + '');
							setValue('limite_hora_extra_diario', response.limite_hora_extra_diario + '');
							setValue('limite_hora_extra_mensal', response.limite_hora_extra_mensal + '');
							setValue('fornecedor_agrupador_id', response.fornecedor_agrupador_id + '');
							setValue('insumo_mao_de_obra_id', response.insumo_mao_de_obra_id + '');
							setValue('servico_folha_pagamento_id',response.servico_folha_pagamento_id + '');
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

	const onSubmit: SubmitHandler<ParametrosSchema> = (data) => {
		if (Number(id) === 0) {
			ParametroService.post({
				id: 0,
				centro_resultado: Number(data.centro_resultado),
				limite_hora_extra_diario: Number(data.centro_resultado),
				limite_hora_extra_mensal: Number(data.centro_resultado),
				insumo_mao_de_obra_id: Number(data.insumo_mao_de_obra_id),
				servico_folha_pagamento_id: Number(data.servico_folha_pagamento_id),
				fornecedor_agrupador_id: Number(data.fornecedor_agrupador_id),
			})
				.then(() => {
					toast.success('Salvo com sucesso');
				})
				.catch((error) => {
					toast.error(error.response.data.message);
				});

		} else {
			ParametroService.put({ 
				id: Number(id),
				centro_resultado: Number(data.centro_resultado),
				limite_hora_extra_diario: Number(data.centro_resultado),
				limite_hora_extra_mensal: Number(data.centro_resultado),
				insumo_mao_de_obra_id: Number(data.insumo_mao_de_obra_id),
				servico_folha_pagamento_id: Number(data.servico_folha_pagamento_id),
				fornecedor_agrupador_id: Number(data.fornecedor_agrupador_id),
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
				<div className="row">
					<div className="col-lg-8 col-xl-4">
						<div className="form-floating mb-4 form-group">
							<input type="number" {...register('centro_resultado')} className="form-control" id="centro_resultado" name='centro_resultado' placeholder='Digite o centro de resultado' />
							<label className="form-label" htmlFor='centro_resultado'>Centro resultado</label>
							{errors.centro_resultado && <TextError text={errors.centro_resultado.message + ''} />}
						</div >
					</div>
					<div className="col-lg-8 col-xl-4">
						<div className="form-floating mb-4 form-group">
							<input type="number" {...register('fornecedor_agrupador_id')} className="form-control" id="fornecedor_agrupador_id" name='fornecedor_agrupador_id' placeholder='Digite o fornecedor agrupador' />
							<label className="form-label" htmlFor='fornecedor_agrupador_id'>Fornecedor agrupador</label>
							{errors.fornecedor_agrupador_id && <TextError text={errors.fornecedor_agrupador_id.message + ''} />}
						</div >
					</div>
					<div className="col-lg-8 col-xl-4">
						<div className="form-floating mb-4 form-group">
							<input type="number" {...register('insumo_mao_de_obra_id')} className="form-control" id="insumo_mao_de_obra_id" name='insumo_mao_de_obra_id' placeholder='Digite o numero modelo' />
							<label className="form-label" htmlFor='insumo_mao_de_obra_id'>Insumo de obra</label>
							{errors.insumo_mao_de_obra_id && <TextError text={errors.insumo_mao_de_obra_id.message + ''} />}
						</div >
					</div>
					<div className="col-lg-8 col-xl-4">
						<div className="form-floating mb-4 form-group">
							<input type="number" {...register('limite_hora_extra_diario')} className="form-control" id="limite_hora_extra_diario" name='limite_hora_extra_diario' placeholder='Digite o limite de hora extra diario' />
							<label className="form-label" htmlFor='encargo'>limite de hora extra diario</label>
							{errors.limite_hora_extra_diario && <TextError text={errors.limite_hora_extra_diario.message + ''} />}
						</div >
					</div>
					<div className="col-lg-8 col-xl-4">
						<div className="form-floating mb-4 form-group">
							<input type="number" {...register('limite_hora_extra_mensal')} className="form-control" id="limite_hora_extra_mensal" name='limite_hora_extra_mensal' placeholder='Digite o limite hora extra mensal' />
							<label className="form-label" htmlFor='limite_hora_extra_mensal'>Limite de hora extra mensal</label>
							{errors.limite_hora_extra_mensal && <TextError text={errors.limite_hora_extra_mensal.message + ''} />}
						</div >
					</div>
					<div className="col-lg-8 col-xl-4">
						<div className="form-floating mb-4 form-group">
							<input type="number" {...register('servico_folha_pagamento_id')} className="form-control" id="servico_folha_pagamento_id" name='servico_folha_pagamento_id' placeholder='Digite a folha de pagamento' />
							<label className="form-label" htmlFor='servico_folha_pagamento_id'>Folha de pagamento</label>
							{errors.servico_folha_pagamento_id && <TextError text={errors.servico_folha_pagamento_id.message + ''} />}
						</div >
					</div>
				</div>
			</form>
		</div>
	);
	return (
		<Box style={{ backgroundColor: '#EDF0F7', minWidth: '100%', minHeight: '100vh' }}>
			<TopBar />
			<Form
				title='Parametros'
				subTitle={`${Number(id) === 0 ? 'Cadastre um novo' : 'Atualize um'}  parametro`}
				formHtml={form}
				goBack={'/parametroLista'}
				handleSubmit={handleSubmit(onSubmit)}
				titleBtn={`${Number(id) === 0 ? 'Salvar' : 'Atualizar'}`}
			/>
			<ToastContainer />
		</Box>	
	);
};