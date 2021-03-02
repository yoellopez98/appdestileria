import React from 'react'

const Nav = (props) => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid" style={{'margin-left':'43%'}}>
        <span class="material-icons" style={{color: 'white','margin-right':'15px'}}>headset</span>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <a className="nav-link" href="#" onClick = {()=> {
                props.mostrar((elemento) => {
                    return {
                        ...elemento,
                        mostrarTodos: !elemento.mostrarTodos,
                    };
                });

            }}>Ver Todos</a>

            </li>
            </ul>
        </div>
        </nav>
        </div>
    )
}

export default Nav
