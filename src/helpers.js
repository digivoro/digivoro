// Example options object:
//  {
//  fields: ["name", "email", "street", "zipcode"],
//  base: "user",
//  mutation: "UPDATE_USER"
// }

export function mapFields(options) {
  const object = {};
  options.fields.forEach(field => {
    object[field] = {
      get() {
        return this.$store.state[options.base][field];
      },
      set(value) {
        this.$store.commit(options.mutation, { [field]: value });
      }
    };
  });
  // for (let x = 0; x < options.fields.length; x++) {
  //   const field = [options.fields[x]];
  //   object[field] = {
  //     get() {
  //       return this.$store.state[options.base][field];
  //     },
  //     set(value) {
  //       this.$store.commit(options.mutation, { [field]: value });
  //     }
  //   };
  // }
  return object;
}
