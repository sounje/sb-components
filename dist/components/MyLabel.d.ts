/// <reference types="react" />
import './mylabel.css';
export interface Props {
    /**
   * Mensaje a mostrar en la etiqueta
   */
    label: string;
    /**
   * Tamaño de la etiqueta
   */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
   * Si quiere todo capitalizado
   */
    allCaps?: boolean;
    /**
     * color de la etiqueta
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Color de fuente personalizada
     */
    fontColor?: string;
    /**
    * Background color
    */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor }: Props) => JSX.Element;
