import React from "react";

export default class WeightTable extends React.Component {
  render() {
    const rows = [];

    this.props.weightTable.forEach((item) => {
      rows.push(
        <tr>
          <th>{item.date}</th>
          <th>{item.weight}</th>
        </tr>
      )
    })

    return (
      <table>
        <thead>
          <tr>
            <th>Дата</th>
            <th>Вес</th>
          </tr>
        </thead>
      <tbody>{rows}</tbody>
      </table>
    )
  }
}