import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../../components/container/MyContainer'
import style from './Menu.module.css'

function Menu() {
	const [descriptionMenu, setDescriptonMenu] = useState('Menu')
	const [display, setDisplay] = useState('')

	const handleDescriptionMenu = (itemMenu) => {
		switch (itemMenu) {
			case 1:
				setDescriptonMenu('Menu - Controle de Estoque')
				setDisplay(itemMenu)
				break
			case 11:
				setDescriptonMenu('Menu - Controle de Estoque/Cadastro')
				setDisplay(itemMenu)
				break
			case 12:
				setDescriptonMenu('Menu - Controle de Estoque/Lançamentos')
				setDisplay(itemMenu)
				break
			case 2:
				setDescriptonMenu('Menu - Financeiro')
				setDisplay(itemMenu)
				break

			default:
				setDescriptonMenu('Menu - Sistema')
				setDisplay(itemMenu)
				break
		}
	}

	return (
		<Container backgroundColor='main' height='70vh'>
			<main className={style.container_menu}>
				<h1>{descriptionMenu}</h1>
				<div className={style.itens_menu}>
					<p onClick={() => handleDescriptionMenu(1)}>Controle de Estoque</p>
					<p onClick={() => handleDescriptionMenu(2)}>Financeiro</p>
					<p onClick={() => handleDescriptionMenu(3)}>Sistema</p>
				</div>
				{/* controle de estoque */}
				<div
					className={style.controle_estoque_itens}
					style={display === 1 ? { display: 'block' } : { display: 'none' }}>
					<p onClick={() => handleDescriptionMenu(11)}>Cadastros</p>
					<p onClick={() => handleDescriptionMenu(12)}>Lançamentos</p>
					<p>Consultas</p>
					<p>Relatórios</p>
				</div>
				{/* cadastros */}
				<div
					className={style.controle_estoque_cadastro}
					style={display === 11 ? { display: 'block' } : { display: 'none' }}>
					<Link to='/unity'>
						<p>Unidade</p>
					</Link>
					<Link to='/product'>
						<p>Produtos</p>
					</Link>
					<Link to='/client_supplier'>
						<p>Clientes/Fornecedores</p>
					</Link>
					<Link to='/tool'>
						<p>Ferramentas</p>
					</Link>
					<Link to='/technician'>
						<p>Técnicos</p>
					</Link>
					<Link to='/tool_list'>
						<p>Lista de Ferramentas</p>
					</Link>
				</div>
				{/* lançamentos */}
				<div
					className={style.controle_estoque_cadastro}
					style={display === 12 ? { display: 'block' } : { display: 'none' }}>
					<Link to='/stock_entry'>
						<p>Entrada de Estoque</p>
					</Link>
					<Link to='/stock_out'>
						<p>Saída de Estoque</p>
					</Link>
					<Link to='/stock_adjust'>
						<p>Ajuste de Estoque</p>
					</Link>
				</div>
			</main>
		</Container>
	)
}

export default Menu
