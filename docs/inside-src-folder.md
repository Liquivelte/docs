# Inside `src` folder

In the `src` folder, we can have anything really but for the purposes of Liquivelte there are 2 special folders. 
  
  1. `snippets`
  Modules in this folder will end up in the snippets as expected. But these are also component modules so we can include one another within the folder. It is wise to not do circular dependencies.
  2. `sections`
  Sections are going to end up in sections, sections can also be folders for extended modularity. Also sections are expected to have `schema` just like your regular sections.


