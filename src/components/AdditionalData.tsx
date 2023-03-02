import Widget, {WidgetProps} from "./Widget"

const data: WidgetProps[] = [
    {
        value: 8,
        unit: "%",
        text: "Humidity"
    },
    {
        value: 21,
        unit: "km/h",
        text: "Wind Spead"
    },
    {
        value: 1010,
        unit: "kPa",
        text: "Pressure"
    }
]

function AdditionalData() {
  return (
    <div>
        {
            data.map(props => (<Widget key={props.text} value={props.value} text={props.text} unit={props.unit}/>))
        }
    </div>
  )
}

export default AdditionalData