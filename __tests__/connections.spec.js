xdescribe('Connections', () => {
  beforeAll(() => {
    console.log('\n.........Connections Spec.........');
  });

  beforeEach((done) => {
    myGraph = Grid.spawn();
    eGraph = Grid.spawn();
    oGraph = Grid.spawn();
    centGrid = Grid.initNodes(10, 10);
    centNodes = Grid.nodes(centGrid);
    evens = centNodes.filter((c, id) => id % 2 === 0);
    odds = centNodes.filter((c, id) => id % 2 !== 0);
    myNodes = allNodes;
    [ n00, n01, n02, n03, n04, n05,
      n10, n11, n12, n13, n14, n15,
      n20, n21, n22, n23, n24, n25,
      n30, n31, n32, n33, n34, n35,
    ] = myNodes;
    Grid.addNodes(myGraph)(...myNodes);
    Grid.addNodes(eGraph)(...evens);
    Grid.addNodes(oGraph)(...odds);
    done();
  });

  describe('adjNodes/adjNodes', () => {
    it('returns all neighboring nodes', () => {
      expect(Conn.adjNodes(myGraph)(n11)).toBeArray();
    });
  });
  describe('rowAdj ', () => {
    it('returns all neighboring nodes adjacent bby row', () => {
      expect(Conn.rowAdj(myGraph)(n11)).toBeArray();
    });
  });
  describe('colAdj ', () => {
    it('returns all neighboring nodes adjacent by column', () => {
      expect(Conn.colAdj(myGraph)(n11)).toBeArray();
    });
  });
  describe('posAdj ', () => {
    it('returns all neighboring nodes adjacent bby row', () => {
      expect(Conn.posAdj(myGraph)(n11)).toBeArray();
    });
  });
  describe('negAdj ', () => {
    it('returns all neighboring nodes adjacent by column', () => {
      expect(Conn.negAdj(myGraph)(n11)).toBeArray();
    });
  });
  describe('adjConnectR', () => {
    it('creates Edges between a node and its adjacents', () => {
      Conn.adjConnectR(myGraph, n11);
      expect(Grid.neighbors(myGraph)(n11)).toBeArray();
    });
  });
  describe('joinAdj', () => {
    it('creates edges between all adjacent nodes', () => {
      expect(Conn.joinAdj(myGraph) instanceof Map).toBeTrue();
    });
  });
  describe('joinCols', () => {
    it('creates edges between colAdj', () => {
      const centralNabes = Grid.neighbors(Conn.joinCols(myGraph))(n22);

      expect(centralNabes.length).toBe(2);
    });
  });
  describe('joinRows', () => {
    it('creates edges between rowAdj', () => {
      const centralNabes = Grid.neighbors(Conn.joinRows(myGraph))(n22);

      expect(centralNabes.length).toBe(2);
    });
  });
  describe('joinPVectors', () => {
    it('creates edges between posAdj', () => {
      const centralNabes = Grid.neighbors(Conn.joinPVectors(myGraph))(n22);

      expect(centralNabes.length).toBe(2);
    });
  });
  describe('joinNVectors', () => {
    it('creates edges between negAdj', () => {
      const centralNabes = Grid.neighbors(Conn.joinNVectors(myGraph))(n22);

      expect(centralNabes.length).toBe(2);
    });
  });
  describe('joinAdj', () => {
    it('creates edges between all adjacent nodes', () => {
      const centralNabes = Grid.neighbors(Conn.joinAdj(myGraph))(n22);

      expect(centralNabes.length).toBe(8);
    });
  });
});
