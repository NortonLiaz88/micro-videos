import { Category } from "./category";
import { omit } from "lodash";

describe("Category Tests", () => {
  test("constructor of category", () => {
    const created_at = new Date();
    let category: Category = new Category({
      name: "Movie",
    });

    let props = omit(category.props, "created_at");

    expect(props).toStrictEqual({
      name: "Movie",
      description: null,
      is_active: true,
    });

    expect(category.props.created_at).toBeInstanceOf(Date);

    category = new Category({
      name: "Movie",
      description: "some description",
      is_active: false,
      created_at,
    });

    expect(category.props).toStrictEqual({
      name: "Movie",
      description: "some description",
      is_active: false,
      created_at,
    });

    category = new Category({ name: "Movie", description: 'some description' });
    expect(category.props).toMatchObject({
      name: "Movie",
      description: "some description",
    });

    category = new Category({ name: "Movie", is_active: true});
    expect(category.props).toMatchObject({
        name: "Movie",
        is_active: true,
      });
  });
});
