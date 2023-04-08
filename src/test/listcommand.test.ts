import { KinesisClient, ListStreamsCommand, ListStreamsCommandOutput } from "@aws-sdk/client-kinesis";
import { Logger } from "../logger";
import { mockClient } from "aws-sdk-client-mock";
import { ListCommand } from "../listcommand";

jest.mock("../logger")

describe("List Command", () => {

  beforeEach(() => {
    mockKinesisResponse();
  });

  afterEach(() => {
    jest.resetAllMocks()
  });


  it("should provide list of kinesis streams", async () => {
    const logger = mockLogger();
    const command = new ListCommand('list',logger);

    await command.parse(['list'])

    expect(logger.log).toHaveBeenCalledWith(["stream1"]);
  });

  function mockKinesisResponse() {
    const kinesisClientMock = mockClient(KinesisClient);
    const kinesisResponse:ListStreamsCommandOutput = {
      "$metadata": {
        httpStatusCode: 200,
        requestId: "cef5b1a7-543e-142d-925f-16a320fa0ee3",
        extendedRequestId: "LWlKTrA7HfF0D4uZQUX4B31yBghoSZhbi0MTba5iR7AUjRuDhnJu72ywW5au3I8N6Q9rgNeBnbwr0aQbY/AjiT3OG8tpD2B4",
        cfId: undefined,
        attempts: 1,
        totalRetryDelay: 0
      },
      HasMoreStreams: false,
      NextToken: undefined,
      StreamNames: ["stream1"],
      StreamSummaries: [
        {
          StreamARN: "stream1arn",
          StreamCreationTimestamp: new Date("2023-01-30T02:04:57.000Z"),
          StreamName: "stream1",
          StreamStatus: "ACTIVE"
        }
      ]
    };

    kinesisClientMock.on(ListStreamsCommand).resolves(kinesisResponse);
  }

  function mockLogger() {
    const MockLogger = Logger as jest.MockedClass<typeof Logger>;
    return new MockLogger();
  }

});