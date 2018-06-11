import { Action } from '@ngrx/store';

export function simpleReducer(state: string = 'Hello World', action: Action){
    console.log(state, action.type);
    switch(action.type){
        case 'SPANISH':
            return state = 'Hola Mundo';
        case 'FRENCH':
            return state = 'Bonjou le monde';
        default:
            return state;
    }
}