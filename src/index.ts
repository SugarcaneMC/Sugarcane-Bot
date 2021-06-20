import SugarcaneClient from "./client/sugarcane";
import config from "./config";

const client = new SugarcaneClient(config);

client.init();