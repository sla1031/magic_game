import { makeExecutableSchema } from 'graphql-tools';
import { importSchema } from 'graphql-import';
import { merge } from 'lodash';

import { CharacterResolvers } from './Character/resolvers';
import { RaceResolvers } from './Race/resolvers';
import { SpellResolvers } from './Spell/resolvers';

const typeDefs = importSchema(`src/schema/schema.graphql`);

const resolvers = merge(
  CharacterResolvers,
  RaceResolvers,
  SpellResolvers,
);
// Put together a schema
export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
