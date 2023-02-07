package c101.fairytalebox.controller;

import c101.fairytalebox.domain.Story;
import c101.fairytalebox.dto.AdminStoryDto;
import c101.fairytalebox.service.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/admin")
@RequiredArgsConstructor
public class AdminController {
    private final AdminService adminService;

    @GetMapping("/stories")
    public ResponseEntity<List<AdminStoryDto>> readStories() {
        return ResponseEntity.ok().body(adminService.readStories());
    }

    @GetMapping("/story/{storyId}")
    public ResponseEntity<AdminStoryDto> readStory(@PathVariable Long storyId) throws Exception {
        return ResponseEntity.ok().body(adminService.readStory(storyId));
    }

    @PostMapping("/story")
    public Long uploadStory(@Valid @RequestBody AdminStoryDto request) throws Exception {
        return adminService.uploadStory(request);
    }

    @PutMapping("/story/{storyId}")
    public ResponseEntity<AdminStoryDto> updateStory(@PathVariable Long storyId, @RequestBody AdminStoryDto request) throws Exception {
        AdminStoryDto adminStoryDto = adminService.updateStory(storyId, request);
        return new ResponseEntity<>(adminStoryDto, HttpStatus.OK);
    }

    @DeleteMapping("/story/{storyId}")
    public ResponseEntity removeStory (@PathVariable Long storyId) {
        adminService.removeStory(storyId);
        return ResponseEntity.ok().build();
    }
}