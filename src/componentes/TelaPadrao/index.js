// import { StatusBar } from "expo-status-bar";
import React from "react";
import { KeyboardAvoidingView, SafeAreaView , StatusBar} from "react-native";
import estilosGlobal from '../../estilos';
import { cores } from "../../estilos";
import estilos from './estilos';
// import SafeAreaView from 'react-native-safe-area-view';
export default function TelaPadrao({ children }) {
    return <><SafeAreaView style={estilos.ajusteTela}>
        <StatusBar backgroudColo={cores.roxo}/>
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            style={estilosGlobal.preencher}
        >
            {children}


        </KeyboardAvoidingView>
    </SafeAreaView>
    <SafeAreaView style={estilos.ajusteTelaBaixo}/>
    </> 
}