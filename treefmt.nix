{ inputs, ... }:
{
  imports = [
    inputs.treefmt-nix.flakeModule
  ];
  perSystem =
    { pkgs, ... }:
    {
      treefmt.programs = {
        mdformat = {
          enable = true;
          package = pkgs.mdformat.withPlugins (
            ps: with ps; [
              mdformat-footnote
              mdformat-frontmatter
              mdformat-gfm
              mdformat-tables
            ]
          );
          settings = {
            end-of-line = "lf";
            number = true;
            wrap = 80;
          };
        };
        nixfmt.enable = true;
      };
    };
}
