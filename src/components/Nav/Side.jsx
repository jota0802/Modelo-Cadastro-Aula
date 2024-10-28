import {Sidebar,Menu,MenuItem,SubMenu,sidebarClasses} from 'react-pro-sidebar'
import {Link} from 'react-router-dom'

export default function Side() {
  return (
    <Sidebar 

      rootStyles={{
        [`.${sidebarClasses.container}`]:{
          backgroundColor: 'white', color:'black'
        }
      }}
    
    >
        <Menu>
          <SubMenu label="Dasboard">
            <MenuItem component={<Link to="/"/>}>Home</MenuItem>
            <MenuItem component={<Link to="/Exemplo1"/>}>Exemplo-1</MenuItem>
            <MenuItem component={<Link to="/Exemplo2"/>}>Exemplo-2</MenuItem>
          </SubMenu>
          <SubMenu label="Conta">
            <MenuItem>Minha Conta</MenuItem>
            <MenuItem>Sair</MenuItem>
          </SubMenu>
        </Menu>
    </Sidebar>
  )
}
