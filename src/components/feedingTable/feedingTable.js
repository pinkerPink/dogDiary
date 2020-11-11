import React from "react";

export default class FeedingTable extends React.Component {
  render() {
    const rows = [];

    this.props.feedTable.forEach((item) => {
      rows.push(
        <tr>
          <th>{item.time}</th>
          <th>{item.count}</th>
        </tr>
      )
    })

    return (
      <table>
        <thead>
          <tr>
            <th>Время</th>
            <th>Количество</th>
          </tr>
        </thead>
      <tbody>{rows}</tbody>
      </table>
    )
  }
}