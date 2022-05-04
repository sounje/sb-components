import './mylabel.css';


export interface Props {
    /**
   * Mensaje a mostrar en la etiqueta
   */
    label: string;
    /**
   * Tamaño de la etiqueta
   */
    size: 'normal'|'h1'|'h2'|'h3';
    /**
   * Si quiere todo capitalizado
   */
  allCaps?: boolean;
  /**
   * color de la etiqueta
   */
  color?: 'primary'|'secondary'|'tertiary';
  /**
   * Color de fuente personalizada
   */
   fontColor?: string;
   /**
   * Background color
   */
    backgroundColor?: string;
}

export const MyLabel = ( {
    label = 'No Label',
    size = 'normal',
    allCaps = false,
    color = 'primary',
    fontColor = '#5517ac',
    backgroundColor = 'transparent'
}: Props ) => {
  return (
    <span className={ `label ${ size } text-${ color }` } 
        style={{ color: fontColor, backgroundColor }}>
        { allCaps ? label.toUpperCase() : label }
    </span>
  )
}

export default MyLabel;