import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components'

export type RegisterInput = {
  name: string
  login: string
  password: string
}

type Props = {
  onSubmit: (data: RegisterInput) => void
}

export function SignUpForm({ onSubmit }: Props) {
  const { t } = useTranslation()

  const { register, handleSubmit, formState } = useForm<RegisterInput>()
  const { errors } = formState

  const submit = handleSubmit(onSubmit)

  return (
    <div className="flex flex-col gap-2">
      <input
        type="text"
        {...register('name', { required: true })}
        placeholder={t('signUpForm.name')}
      />
      <span className="text-sm text-red-500">{errors.name && t('common.nameRequired')}</span>

      <input
        type="email"
        {...register('login', { required: true })}
        placeholder={t('common.login')}
      />
      <span className="text-sm text-red-500">{errors.login && t('common.loginReqiured')}</span>

      <input
        type="password"
        {...register('password', { required: true })}
        placeholder={t('common.password')}
      />
      <span className="text-sm text-red-500">
        {errors.password && t('common.passwordReqiured')}
      </span>

      <Button text={t('common.signUp')} onClick={submit} />
    </div>
  )
}
