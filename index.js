const Table = require("cli-table");
const request = require("graphql-request").request;

const query = `{
    buttons {
        id
        tcId 
        coreId 
        roomName 
        isAssigned 
        particleName 
    }
}`;

const table = new Table({
  head: ["id", "tcId", "coreId", "roomName", "isAssigned", "particleName"],
  colWidths: [30, 8, 30, 20, 15, 20]
});

const url = "https://api.thatconference.com/graphql";

request(url, query).then(data => {
  const tableGuts = data.buttons.map(item => {
    return [
      item.id,
      item.tcId,
      item.coreId,
      item.roomName,
      item.isAssigned,
      item.particleName
    ];
  });
  table.push(...tableGuts);
  console.log(table.toString());
});
