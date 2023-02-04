import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  ViewColumnsIcon,
  ArrowRightOnRectangleIcon,
  HomeIcon,
  UserIcon
} from '@heroicons/react/24/solid'

import { ROUTES } from '@/constants'
import { Button, Switch, Listbox } from '@/components'

export function Header() {
  const [theme, setTheme] = useState(false)

  const { i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  const onAddBoard = () => {
    console.log('add new board')
  }

  const onSignOut = () => {
    console.log('sign out')
  }

  return (
    <header className="bg-white py-2 px-4">
      <div className="container m-auto flex items-center gap-4">
        <Link to={ROUTES.home}>
          <h1 className="whitespace-nowrap">
            <ViewColumnsIcon className="h-14 w-14 text-purple-500 hover:text-purple-400" />
          </h1>
        </Link>

        <Switch enabled={theme} onChange={setTheme} />

        <Listbox value={i18n.language} options={['ru', 'en']} onChange={changeLanguage} />

        <div className="ml-auto flex items-center gap-4">
          <Button className="hidden md:block" text="+ New board" onClick={onAddBoard} />

          <Link to={ROUTES.main}>
            <HomeIcon className="h-6 w-6 text-purple-500 hover:text-purple-400" />
          </Link>

          <Link to={ROUTES.profile}>
            <UserIcon className="h-6 w-6 text-purple-500 hover:text-purple-400" />
          </Link>

          <ArrowRightOnRectangleIcon
            className="h-6 w-6 cursor-pointer text-purple-500 hover:text-purple-400"
            onClick={onSignOut}
          />
        </div>
      </div>
    </header>
  )
}
