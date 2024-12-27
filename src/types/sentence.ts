type Sentence = {
  _id: Id,
  name: string,
  from: string
}

type Id = {
  $oid: string
}

export default Sentence