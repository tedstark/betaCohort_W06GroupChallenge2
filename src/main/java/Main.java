import static spark.Spark.*;

public class Main {
    public static void main(String[] args) {
        staticFileLocation("/public");
        get("/", ((request, response) -> {
            response.redirect("/index.html");
            return null;
        }));
        get("/hotdog", ((request, response) -> {
            response.type("application/json");
            return "{\n" +
                    "  \"blurbs\": [\n" +
                    "    {\n" +
                    "      \"blurb\": \"I like how you explain code.\",\n" +
                    "      \"name\" : \"Scott\"\n" +
                    "    },\n" +
                    "    {\n" +
                    "      \"blurb\": \"Thanks to Koddie for the new snacks!\",\n" +
                    "      \"name\" : \"Koddie\"\n" +
                    "    },\n" +
                    "    {\n" +
                    "      \"blurb\": \"Shout out to Mark!  He's a great partner to work with. \",\n" +
                    "      \"name\" : \"Mark\"\n" +
                    "    },\n" +
                    "    {\n" +
                    "      \"blurb\": \"Ted helped me to better understand my weekend challenge.\",\n" +
                    "      \"name\" : \"Ted\"\n" +
                    "    },\n" +
                    "    {\n" +
                    "      \"blurb\": \"Joan helped me better understand the mini challenge.\",\n" +
                    "      \"name\" : \"Joan\"\n" +
                    "    },\n" +
                    "    {\n" +
                    "      \"blurb\": \"I think Lori is thinking like a programmer and asking great questions.\",\n" +
                    "      \"name\" : \"Lori\"\n" +
                    "    },\n" +
                    "    {\n" +
                    "      \"blurb\": \"Manny his patience and explanations helped me process the peer challenge.\",\n" +
                    "      \"name\" : \"Manny\"\n" +
                    "    },\n" +
                    "    {\n" +
                    "      \"blurb\": \"Zech walked me through each step and explained things that were confusing to me.\",\n" +
                    "      \"name\" : \"Zech\"\n" +
                    "    },\n" +
                    "    {\n" +
                    "      \"blurb\": \"Kym was helpful and patient.\",\n" +
                    "      \"name\" : \"Kym\"\n" +
                    "    },\n" +
                    "    {\n" +
                    "      \"blurb\": \"Shout out to Jake for working out our group challenge on the timer project.\",\n" +
                    "      \"name\" : \"Jake\"\n" +
                    "    }\n" +
                    "  ]\n" +
                    "}";
        }));
    }
}
