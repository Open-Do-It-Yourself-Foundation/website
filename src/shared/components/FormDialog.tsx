import { Dialog, DialogContent, Box, withStyles } from "@material-ui/core";
import DialogTitleWithCloseIcon from "./DialogTitleWithCloseIcon";

const styles = (theme: any) => ({
  dialogPaper: {
    display: "flex" as const,
    flexDirection: "column" as const,
    alignItems: "center" as const,
    paddingBottom: theme.spacing(3),
    maxWidth: 420,
  },
  actions: {
    marginTop: theme.spacing(2),
  },
  dialogPaperScrollPaper: {
    maxHeight: "none" as const,
  },
  dialogContent: {
    paddingTop: 0,
    paddingBottom: 0,
  },
});

/**
 * A Wrapper around the Dialog component to create centered
 * Login, Register or other Dialogs.
 */
function FormDialog(props: any) {
  const {
    classes,
    open,
    onClose,
    loading,
    headline,
    onFormSubmit,
    content,
    actions,
    hideBackdrop,
  } = props;
  return (
    <Dialog
      open={open}
      onClose={onClose}
      disableBackdropClick={loading}
      disableEscapeKeyDown={loading}
      classes={{
        paper: classes.dialogPaper,
        paperScrollPaper: classes.dialogPaperScrollPaper,
      }}
      hideBackdrop={hideBackdrop ? hideBackdrop : false}
    >
      <DialogTitleWithCloseIcon
        title={headline}
        onClose={onClose}
        disabled={loading}
      />
      <DialogContent className={classes.dialogContent}>
        <form onSubmit={onFormSubmit}>
          <div>{content}</div>
          <Box width="100%" className={classes.actions}>
            {actions}
          </Box>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default withStyles(styles, { withTheme: true })(FormDialog);