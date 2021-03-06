import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { palette } from '../theme';
import PacientesPage from '../pages/PacientesPage'


const tema = {
    tabBarOptions: {
        labelStyle: { fontSize: 12 },
        upperCaseLabel: true,
        style: {
            backgroundColor: palette.primary.main,
            color: palette.primary.contrastText,
        },
        indicatorStyle: {
            backgroundColor: palette.secondary.main
        },
    }
}

const rutas = {

    // test:ContactosPage, 
    porAtender: 
    {
        screen: props => <PacientesPage titulo="Por Atender" mostrar={1}/>,
        navigationOptions: {
            tabBarLabel: 'Atender'
        }
    },
    atendiendo: {
        screen: props => <PacientesPage titulo="En progreso" mostrar={2} />,
        navigationOptions: {
            tabBarLabel: 'En progreso'
        }
    },

    atendido: {
        screen: props => <PacientesPage titulo="Atendido" mostrar={3} />,
        tabBarLabel: 'Atendido',
        navigationOptions: {
            tabBarLabel: 'Vendido'
        }
    },
}



const TabNavigator = createMaterialTopTabNavigator(rutas, tema);

export default createAppContainer(TabNavigator);
